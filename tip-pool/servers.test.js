describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should call UpdateServerTable() for each server in allServers.", function(){
    expect(serverTbody.childElementCount).toEqual(Object.keys(allServers).length);
  })

  afterEach(function() {
    // teardown logic
    allServers = {}
    serverNameInput.value = ''
    serverTbody.innerHTML = ''
  });

});
