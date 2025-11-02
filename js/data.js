// UAEI R30M Farm Pilot Presentation Data
// Modal content database

const farmPilotData = {
    investment: {
        total: 30000000,
        farmAcquisition: 25000000,
        operations: 5000000,
        farmers: 150,
        farmSize: 455,
        clusters: 3,
        duration: 6
    },
    risk: {
        downsideIfFails: 0.13,
        assetBacked: 0.83,
        capitalPreserved: 0.87
    },
    budget: {
        farmAcquisition: { amount: 25000000, percentage: 83 },
        humanCapital: { amount: 1600000, percentage: 5.3 },
        technology: { amount: 1200000, percentage: 4 },
        agriculturalInputs: { amount: 1400000, percentage: 4.7 },
        logistics: { amount: 600000, percentage: 2 },
        monitoring: { amount: 200000, percentage: 0.7 }
    },
    tripleValidation: {
        farmers: '150 farmers (450-600ha under management)',
        farm: '455ha productive farm (R25M acquisition)',
        result: 'Triple validation: farmers + farm + supply security'
    },
    targetFunders: ['Land Bank', 'NEF', 'LIMDEV'],
    rating: 9.8,
    conditionalDeployment: 508600000
};
