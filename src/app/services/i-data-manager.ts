import { Query } from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';

export interface IDataManager {


/**
 * Executes the given query with local data source.
 *
 * @param  {Query} query - Defines the query to retrieve data.
 */
executeLocal(query?: Query): Object[];

/**
 * Executes the given query with either local or remote data source.
 * It will be executed as asynchronously and returns Promise object which will be resolved or rejected after action completed.
 *
 * @param  {Query|Function} query - Defines the query to retrieve data.
 * @param  {Function} done - Defines the callback function and triggers when the Promise is resolved.
 * @param  {Function} fail - Defines the callback function and triggers when the Promise is rejected.
 * @param  {Function} always - Defines the callback function and triggers when the Promise is resolved or rejected.
 */
executeQuery(query: Query | Function, done?: Function, fail?: Function, always?: Function): Promise<Ajax>;

/**
 * Save bulk changes to the given table name.
 * User can add a new record, edit an existing record, and delete a record at the same time.
 * If the datasource from remote, then updated in a single post.
 *
 * @param {Object} changes - Defines the CrudOptions.
 * @param {string} key - Defines the column field.
 * @param {string|Query} tableName - Defines the table name.
 * @param {Query} query - Sets default query for the DataManager.
 * @param original
 */
saveChanges(changes: Object, key?: string, tableName?: string | Query, query?: Query, original?: Object): Promise<Object> | Object;

/**
 * Inserts new record in the given table.
 *
 * @param {Object} data - Defines the data to insert.
 * @param {string|Query} tableName - Defines the table name.
 * @param {Query} query - Sets default query for the DataManager.
 * @param position
 */
insert(data: Object, tableName?: string | Query, query?: Query, position?: number): Object | Promise<Object>;

/**
 * Removes data from the table with the given key.
 *
 * @param  {string} keyField - Defines the column field.
 * @param  {Object} value - Defines the value to find the data in the specified column.
 * @param  {string|Query} tableName - Defines the table name
 * @param  {Query} query - Sets default query for the DataManager.
 */
remove(keyField: string, value: Object, tableName?: string | Query, query?: Query): Object | Promise<Object>;

/**
 * Updates existing record in the given table.
 *
 * @param {string} keyField - Defines the column field.
 * @param {Object} value - Defines the value to find the data in the specified column.
 * @param {string|Query} tableName - Defines the table name
 * @param {Query} query - Sets default query for the DataManager.
 * @param original
 */
update(keyField: string, value: Object, tableName?: string | Query, query?: Query, original?: Object): Object | Promise<Object>;

}
