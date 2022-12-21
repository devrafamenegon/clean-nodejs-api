import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

interface MongoAccountModel {
  _id: string
  name: string
  email: string
  password: string
}

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const { insertedId } = await accountCollection.insertOne(accountData)
    const addedAccount = await accountCollection.findOne(insertedId) as unknown as MongoAccountModel
    const { _id, ...accountWithoutId } = addedAccount
    return Object.assign({}, accountWithoutId, { id: _id }) as AccountModel
  }
}
