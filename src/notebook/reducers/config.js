/* @flow */

import { Map } from 'immutable';

type SetConfigAction = { type: 'SET_CONFIG_KEY', key: string, value: string };
type MergeConfigAction = { type: 'MERGE_CONFIG', config: Map<any, any> };

type ConfigAction = SetConfigAction | MergeConfigAction;

type State = Map<any, any>;

export function setConfigKey(state: State, action: SetConfigAction) {
  const { key, value } = action;
  return state.set(key, value);
}

export function mergeConfig(state: State, action: MergeConfigAction) {
  const { config } = action;
  return state.merge(config);
}

export default function handleConfig(state: State = Map(), action: ConfigAction) {
  switch (action.type) {
    case 'SET_CONFIG_KEY':
      return setConfigKey(state, action);
    case 'MERGE_CONFIG':
      return mergeConfig(state, action);
    default:
      return state;
  }
}
