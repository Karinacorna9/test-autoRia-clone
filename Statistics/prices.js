export async function getPriceStatistics(user, listingId) {
    if (!user.canViewStatistics()) {
        throw new Error('You do not have permission to view statistics');
    }

    // price statistics logic here
    const getPriceStatistics = async () => {
        try {
            const cars = await Car.find().exec();

            if (!cars || cars.length === 0) {
                return {
                    minPrice: 0,
                    maxPrice: 0,
                    averagePrice: 0,
                    totalPrice: 0,
                    count: 0
                };
            }

            const prices = cars.map((car) => car.Ціна);
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);
            const totalPrice = prices.reduce((acc, current) => acc + current, 0);
            const averagePrice = totalPrice / prices.length;
            const count = prices.length;

            return {
                minPrice,
                maxPrice,
                averagePrice,
                totalPrice,
                count
            };
        } catch (err) {
            console.error('Error getting price statistics:', err);
            return {
                minPrice: 0,
                maxPrice: 0,
                averagePrice: 0,
                totalPrice: 0,
                count: 0
            };
        }
    };

    module.exports = { getPriceStatistics };
}

