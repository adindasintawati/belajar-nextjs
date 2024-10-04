// folder helpers/utils digunakan untuk menyimpan fungsi-fungsi yang reusable(bisa digunakan berkali-kali)

export default function formatCurrency(
  value,
  locale = "id-ID",
  currency = "IDR"
) {
  return value.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
}
