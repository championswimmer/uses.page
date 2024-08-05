import express, { Request, Response } from 'express';
import { AppDataSource } from '../db/init';
import { User } from './user.entity';

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);

router.get('/@:username', async (req: Request, res: Response) => {
  try {
    const user = await userRepository.findOne({ where: { username: req.params.username } });
    if (user) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking username', error });
  }
});

// GET /users/{username}
router.get('/:username', async (req: Request, res: Response) => {
  try {
    const user = await userRepository.findOne({ where: { username: req.params.username } });
    if (user) {
      res.json(user.toJSON());
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
});

// POST /users
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userRepository.findOne({where: [{ username}, {email}]});
    if(existingUser){
      return res.status(400).json({ message: 'Username already exists'});
    }
    const newUser = userRepository.create({ username, email, password });
    await userRepository.save(newUser);
    res.status(201).json({ message: 'User created successfully', userId: newUser.id });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
});

// GET /users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userRepository.find();
    // Remove passwords from the response
    res.json(users.map((user) => user.toJSON()));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

export default router;