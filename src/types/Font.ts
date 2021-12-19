export interface Font {
  name: string;
  author: string;
  files: string[];
  weights: number[];
  family: string;
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
