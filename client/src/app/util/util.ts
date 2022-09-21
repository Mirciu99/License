import i18n from "../../i18n";


export function getCookie(key:string) {
    const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }


export function currencyFormat(amount:number){
  return i18n.t("Pret.1") === "$" ? i18n.t("Pret.1") + (amount/100).toFixed(2) : (amount/100 * 4.3 ).toFixed(2) + i18n.t("Pret.1");
}