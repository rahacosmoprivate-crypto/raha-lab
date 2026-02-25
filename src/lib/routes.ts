import { LANGS, type Lang } from "./i18n";
import { getCollection } from "astro:content";

export const staticLangPaths = () => LANGS.map((lang)=>({ params:{ lang } }));

export async function staticSlugPaths(collection:"ingredients"|"formulations"|"news", slugKey:"slug"){
  const all = await getCollection(collection);
  const out:{ params:{ lang:Lang; [k:string]:string } }[] = [];
  for (const item of all) {
    const lang = item.data.lang as Lang;
    const slug = item.id.split("/").pop()?.replace(".md","") || "";
    if(!slug) continue;
    out.push({ params:{ lang, [slugKey]: slug } as any });
  }
  return out;
}
