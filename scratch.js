Record.findOne({id:1}).exec(
  function(err,record) { if(err){ console.log("ERR") } else { console.log(record.inspect())}}
);


Record.findOne({id:2}).exec(
  function(err,record) { if(err){ console.log("ERR") } else { console.log(record.inspect())}}
);

Record.findOne({id:1}).populate('domain').exec(
  function(err,record) { if(err){ console.log("ERR") } else { console.log(record.inspect())}}
);

Domain.findOne({id:1}).populate('records').exec(
  function(err,record) { if(err){ console.log(err) } else { console.log(record.inspect())}}
);


Record.findOne({id:1}).populate('domain').exec(
  function(err,record) { if(err){ console.log("ERR") } else { console.log(record.inspect())}}
);
