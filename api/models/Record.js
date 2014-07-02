/**
* Record.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  // Auto-migrate is fucking retarded.
  migrate: 'safe',
  connection: ['postgres'],
  // tableName: 'records',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    //domain_id: 'int',
    domain: {
      model: 'domain',
      columnName: 'domain_id'
    },
    name: {
      type: 'string',
      required: true,
      maxLength: 255
    },
    type:  {
      type: 'string',
      required: true,
      maxLength: 10
    },
    content:  {
      type: 'string',
      required: true,
      maxLength: 255
    },
    ttl: 'integer',
    prio: 'integer',
    change_date: 'integer',
    ordername:  {
      type: 'string',
      required: true,
      maxLength: 255
    },
    auth: 'boolean'
  }

};

