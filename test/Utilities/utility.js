class Utility {
    async getRandomIndices(num, max) {
        const indices = new Set();

        while (indices.size < num) {
            const randomIndex = Math.floor(Math.random() * max);
            indices.add(randomIndex);
        }

        return Array.from(indices);
    }
    async randomNumber(min, max) {
        const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
        return randomValue;
    }
    async randomString(length) {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }
    async convertTextToNumber(text) {
        const value = Number(text.replace(/[^0-9]/g, ""));
        return value;
    }
}

module.exports = new Utility();
