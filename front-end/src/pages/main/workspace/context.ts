import {getCurrentWorkspaceDatabase, setCurrentWorkspaceDatabase } from '@/utils/localStorage';
import { ITreeNode } from '@/typings/tree';
import { TreeNodeType } from '@/constants/tree';

export type ICurrentDatabase = {
  databaseType: TreeNodeType;
  databaseSourceName?: string;
  dataSourceId?: number;
  databaseName?: string;
  schemaName?: string;
}

export interface IState {
  currentDatabase: ICurrentDatabase;
  dblclickTreeNodeData: ITreeNode;
}

export enum workspaceActionType {
  CURRENT_DATABASE = 'currentDatabase',
  DBLCLICK_TREE_NODE = 'dblclickTreeNodeData',
}

export interface IAction {
  type: workspaceActionType;
  payload?: any;
}

export const initState = {
  currentDatabase: getCurrentWorkspaceDatabase(),
  dblclickTreeNodeData: undefined
}

export const reducer = (preState: IState, action: IAction ) => {
  const { type, payload } = action;

  switch(type) {
    case workspaceActionType.CURRENT_DATABASE:
      return changeCurrentDatabase(preState,payload);
    case workspaceActionType.DBLCLICK_TREE_NODE:
      return {
        ...preState,
        dblclickTreeNodeData:payload
      }
  }
}

function changeCurrentDatabase(preState:IState, payload:any){
  setCurrentWorkspaceDatabase(payload);
  return {
    ...preState,
    currentDatabase: payload,
  }
}