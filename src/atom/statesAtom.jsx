import { atom } from 'jotai'

const localProductSelect = JSON.parse(localStorage.getItem('productSelect'))

export const allProducts = atom([])
export const productSelect = atom(localProductSelect || [])