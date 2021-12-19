export interface Font {
  name: string;
  author: string;
  files: string[];
  fontWeights: number[];
  fontFamily: string;
  licenseSummary: {
    print: boolean;
    website: boolean;
    video: boolean;
    paper: boolean;
    embeding: boolean;
    bici: boolean;
    ofl: boolean;
  };
  license: string;
  availableSubset: boolean;
}
