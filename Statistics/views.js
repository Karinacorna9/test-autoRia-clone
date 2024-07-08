export async function getViewStatistics(user, listingId) {
    if (!user.canViewStatistics()) {
        throw new Error('You do not have permission to view statistics');
    }

    // view statistics logic here
    const getViewStatistics = async () => {
        try {
            const cars = await Car.aggregate([
                {
                    $group: {
                        _id: "$Марка",
                        count: { $sum: 1 },
                        averagePrice: { $avg: "$Ціна" }
                    }
                },
                {
                    $sort: { count: -1 }
                }
            ]).exec();

            const regions = await Car.aggregate([
                {
                    $group: {
                        _id: "$Регіон",
                        count: { $sum: 1 }
                    }
                },
                {
                    $sort: { count: -1 }
                }
            ]).exec();

            const models = await Car.aggregate([
                {
                    $group: {
                        _id: "$Модель",
                        count: { $sum: 1 }
                    }
                },
                {
                    $sort: { count: -1 }
                }
            ]).exec();

            const years = await Car.aggregate([
                {
                    $group: {
                        _id: "$Рік_випуску",
                        count: { $sum: 1 }
                    }
                },
                {
                    $sort: { count: -1 }
                }
            ]).exec();

            return {
                byBrand: cars,
                byRegion: regions,
                byModel: models,
                byYear: years
            };
        } catch (err) {
            console.error('Error getting view statistics:', err);
            return {
                byBrand: [],
                byRegion: [],
                byModel: [],
                byYear: []
            };
        }
    };

    module.exports = { getViewStatistics };
}
