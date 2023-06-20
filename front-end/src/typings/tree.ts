import { TreeNodeType } from '@/constants/tree';
import { DatabaseTypeCode } from '@/constants/database';

export interface ITreeNode {
  key: string | number;
  name: string;
  treeNodeType: TreeNodeType;
  isLeaf?: boolean;
  children?: ITreeNode[];
  columnType?: string;
  parentParams?: {
    databaseType?: DatabaseTypeCode;
    dataSourceName?: string;
    dataSourceId?: number;	
    databaseName?: string;
    schemaName?: string;
    tableName?: string;
  };
}