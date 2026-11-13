const categoryLabels: Record<string, string> = {
  business: "Economia",
  culture: "Cultura",
  economy: "Economia",
  entertainment: "Entretenimento",
  health: "Saúde",
  politics: "Política",
  science: "Ciência",
  sport: "Esportes",
  sports: "Esportes",
  tech: "Tecnologia",
  technology: "Tecnologia",
  world: "Mundo",
  education: "Educação",
};

export function normalizeFilterValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLocaleLowerCase("pt-BR");
}

export function toCategorySlug(category: string) {
  return normalizeFilterValue(category)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getCategoryLabel(category: string) {
  return (
    categoryLabels[normalizeFilterValue(category)] ??
    category.charAt(0).toLocaleUpperCase("pt-BR") + category.slice(1)
  );
}