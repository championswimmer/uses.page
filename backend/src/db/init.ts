import { DataSource } from 'typeorm'
import { join } from 'path'
import { User } from '../users/user.entity'
import { Usable } from '../usables/usable.entity'
import { UserUsable } from '../usables/user-usable.entity'

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: ('database.sqlite'),
  entities: [User, Usable, UserUsable],
  synchronize: true,
  logging: true,
})

export async function initializeDatabase() {
  try {
    await AppDataSource.initialize()
    console.log('Data Source has been initialized!')
  } catch (error) {
    console.error('Error during Data Source initialization:', error)
    throw error
  }
}
