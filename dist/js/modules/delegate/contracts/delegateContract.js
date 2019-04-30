/**
 * delegate contract abi
 */
app.constant('$delegateContract', {
    address: '0x30f855afb78758Aa4C2dc706fb0fA3A98c865d2d',
    abi: [{
        "constant": true,
        "inputs": [{"name": "delegator", "type": "address"}],
        "name": "getCurrentDelegation",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "to", "type": "address"}],
        "name": "delegate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [],
        "name": "undelegate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "guardian", "type": "address"}],
        "name": "getCurrentVote",
        "outputs": [{"name": "validators", "type": "address[]"}, {"name": "blockNumber", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "maxVoteOutCount",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "guardian", "type": "address"}],
        "name": "getCurrentVoteBytes20",
        "outputs": [{"name": "validatorsBytes20", "type": "bytes20[]"}, {"name": "blockNumber", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "validators", "type": "address[]"}],
        "name": "voteOut",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "VERSION",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"name": "maxVoteOutCount_", "type": "uint256"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "voter", "type": "address"}, {
            "indexed": false,
            "name": "validators",
            "type": "address[]"
        }, {"indexed": false, "name": "voteCounter", "type": "uint256"}],
        "name": "VoteOut",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "delegator", "type": "address"}, {
            "indexed": true,
            "name": "to",
            "type": "address"
        }, {"indexed": false, "name": "delegationCounter", "type": "uint256"}],
        "name": "Delegate",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "delegator", "type": "address"}, {
            "indexed": false,
            "name": "delegationCounter",
            "type": "uint256"
        }],
        "name": "Undelegate",
        "type": "event"
    }]
});
