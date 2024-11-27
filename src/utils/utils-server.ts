import * as fs from "fs"
import path from "path";

export function getContent(){
    const pathFile = path.resolve("src/lib/lang_id.json");
    const langJson = JSON.parse(fs.readFileSync(pathFile, "utf-8")) as unknown as ContentLaguage.Pages;

    return langJson;
}