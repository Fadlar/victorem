import { usePage } from "@inertiajs/react";

interface Language {
    list: Record<string, string>;
}

export function t(
    key: string,
    replace: Record<string, string | number> = {},
): string {
    const { props } = usePage();
    const language =
        "language" in props ? (props.language as Language) : { list: {} };

    let translation = language.list[key] ? language.list[key] : key;

    Object.keys(replace).forEach((replaceKey) => {
        translation = translation.replace(
            `:${replaceKey}`,
            replace[replaceKey].toString(),
        );
    });

    return translation;
}
