const { makeErrorMappingProxy } = require('@aragon/contract-helpers-test')

module.exports = makeErrorMappingProxy({
  // aragonOS errors
  APP_AUTH_FAILED: 'APP_AUTH_FAILED',
  INIT_ALREADY_INITIALIZED: 'INIT_ALREADY_INITIALIZED',
  INIT_NOT_INITIALIZED: 'INIT_NOT_INITIALIZED',
  RECOVER_DISALLOWED: 'RECOVER_DISALLOWED',

  // Voting errors
  VOTING_NO_VOTE: 'VOTING_NO_VOTE',
  VOTING_INIT_PCTS: 'VOTING_INIT_PCTS',
  VOTING_CHANGE_SUPPORT_PCTS: 'VOTING_CHANGE_SUPPORT_PCTS',
  VOTING_CHANGE_QUORUM_PCTS: 'VOTING_CHANGE_QUORUM_PCTS',
  VOTING_INIT_SUPPORT_TOO_BIG: 'VOTING_INIT_SUPPORT_TOO_BIG',
  VOTING_CHANGE_SUPP_TOO_BIG: 'VOTING_CHANGE_SUPP_TOO_BIG',
  VOTING_CAN_NOT_VOTE: 'VOTING_CAN_NOT_VOTE',
  VOTING_CAN_NOT_EXECUTE: 'VOTING_CAN_NOT_EXECUTE',
  VOTING_CAN_NOT_FORWARD: 'VOTING_CAN_NOT_FORWARD',
  VOTING_NO_VOTING_POWER: 'VOTING_NO_VOTING_POWER',
  VOTING_OBJ_TIME_TOO_BIG: 'VOTING_OBJ_TIME_TOO_BIG',
  VOTING_VOTE_TIME_TOO_SMALL: 'VOTING_VOTE_TIME_TOO_SMALL',
})
