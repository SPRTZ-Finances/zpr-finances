import axios from "axios";

class ApiLib {
    static async getExpenses() {
        return await axios.get('http://localhost:8080/expenses');
    }
}

export default ApiLib
