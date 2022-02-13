const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'kepler exploration',
    rocket: 'explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(launch.flightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers:['NASA'],
            flightNumber: latestFlightNumber,
        }));
}

function existsLaunchWithId(launchId) {
    return launch.has(launchId);
}


function abortLaunchById(launchId) {
    const aborted = launch.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}