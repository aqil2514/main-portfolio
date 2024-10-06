/** Interface bahasa */
namespace ContentLaguage {
  export type Profession = "full-stack-developer" | "writer" | "video-editor" | "excel-specialist";
  export interface ProfessionObject {
    readonly greetings: string;
    readonly certificates: GenType.CardImage[];
  }
  export interface Pages {
    readonly profile: {
        [key in Profession]: ProfessionObject;
    };
  }
}
