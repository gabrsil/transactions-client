export const formatMoney = (value: number) => {
    const amount = +(value)
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount)

    return formatted
}