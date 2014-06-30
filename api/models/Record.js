/**
 * Record
 *
 * @module      :: Model
 * @description :: A DNS record, e.g. an A or a PTR record.
 *                 Note one pdns-specific behavior: in order to support DNSSEC, ordername and auth
 *                 columns need to be filled in correctly.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    domain_id: 'int',
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
    ttl: 'int',
    prio: 'int',
    change_date: 'int',
    ordername:  {
      type: 'string',
      required: true,
      maxLength: 255
    },
    auth: 'boolean'
  }

};
