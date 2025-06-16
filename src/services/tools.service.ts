import MyTools from '../assets/tools.json';
import { ToolType } from '../types/Tool.Type';

const useToolsService = () => {
  const getToolList = (): ToolType[] => {
    return MyTools.map((t) => t as ToolType);
  };

  return {
    getToolList
  };
};

export default useToolsService;
