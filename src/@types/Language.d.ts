/** Interface bahasa */
namespace ContentLaguage {
  export type Profession = "full-stack-developer" | "writer" | "video-editor";
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
