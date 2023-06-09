import { Query } from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';
import { IDataManager } from './i-data-manager';
import { Patient } from '../models/patient';

export class MockDataManager implements IDataManager {

    executeLocal(query?: Query): Object[] {
        var result: Object[] = [];

        result.push(new Patient("Thierry", "Dupond", new Date(1986,6,21)));
        return result;
    }

    executeQuery(query: Function | Query, done?: Function | undefined, fail?: Function | undefined, always?: Function | undefined): Promise<Ajax> {
        return new Promise()this.executeLocal()
    }

    saveChanges(changes: Object, key?: string | undefined, tableName?: string | Query | undefined, query?: Query | undefined, original?: Object | undefined): Object | Promise<Object> {
        throw new Error('Method not implemented.');
    }
    insert(data: Object, tableName?: string | Query | undefined, query?: Query | undefined, position?: number | undefined): Object | Promise<Object> {
        throw new Error('Method not implemented.');
    }
    remove(keyField: string, value: Object, tableName?: string | Query | undefined, query?: Query | undefined): Object | Promise<Object> {
        throw new Error('Method not implemented.');
    }
    update(keyField: string, value: Object, tableName?: string | Query | undefined, query?: Query | undefined, original?: Object | undefined): Object | Promise<Object> {
        throw new Error('Method not implemented.');
    }



}