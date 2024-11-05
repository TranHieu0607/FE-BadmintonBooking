const endpoint = 'http://localhost:8080/badminton-booking/'

export const adminService = () => {
    getAccounts: async() => {
        await fetch(endpoint+'api/booking')
    }
}