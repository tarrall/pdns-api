/**
* Domain.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  // Auto-migrate is fucking retarded.
  migrate: 'safe',
  connection: ['postgres'],
  // tableName: 'domains',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 255
    },
    master:  {
      type: 'string',
      required: false,
      maxLength: 20
    },
    last_check: {
      type: 'integer',
      required: false
    },
    type:  {
      type: 'string',
      required: true,
      maxLength: 6
    },
    notified_serial: 'integer',
    account:  {
      type: 'string',
      required: false,
      maxLength: 40
    },

    records: {
      collection: 'record',
      via: 'domain'
    }
  }

};

