function displayClassDates(className, startDate, numWeeks, timeSuffix, skippedWeeks = []) {
    const classDatesContainer = document.getElementById(`classDates${className}`);
    if (!classDatesContainer) return; // Exit if container does not exist

    if (!startDate || isNaN(new Date(startDate))) {
        console.error("Invalid startDate format. Use 'YYYY-MM-DD'.");
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure today is set to midnight

    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0); // Ensure the start date is set to midnight

    let content = ''; // Use a single string to accumulate HTML content

    for (let i = 0; i < numWeeks; i++) {
        if (skippedWeeks.includes(i + 1)) continue; // Skip the week if it's in the skippedWeeks array

        const currentDate = new Date(start);
        currentDate.setDate(start.getDate() + (i * 7)); // Calculate the date for the current week
        currentDate.setHours(0, 0, 0, 0); // Ensure currentDate is set to midnight

        if (currentDate >= today) { // Include dates on the same day as today
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/babybodybeautiful#focus=ev-${className}-${linkDate}${timeSuffix}`;
            
            // Append content to the string
            content += `<a href="${link}" target="_blank"><small>${formattedDate}</small></a><span style="margin-right: 10px;"></span>`;
        }
    }

    classDatesContainer.innerHTML = content; // Update the DOM in one operation
}

document.addEventListener('DOMContentLoaded', function () {
    const classSchedules = [
        { className: "si4q", startDate: "2025-02-28", numWeeks: 1, timeSuffix: "094500" },
        { className: "sauj", startDate: "2025-02-25", numWeeks: 1, timeSuffix: "131500" },
        { className: "s85e", startDate: "2025-02-26", numWeeks: 8, timeSuffix: "183000" },
        { className: "sp36", startDate: "2025-02-26", numWeeks: 8, timeSuffix: "103000" },
        { className: "skvj", startDate: "2025-02-26", numWeeks: 8, timeSuffix: "093000" },
        { className: "s5ok", startDate: "2025-02-25", numWeeks: 8, timeSuffix: "141500" },
        { className: "s0ih", startDate: "2024-10-30", numWeeks: 8, timeSuffix: "093000" },
        { className: "saxh", startDate: "2024-10-30", numWeeks: 8, timeSuffix: "183000" },
        { className: "sm5o", startDate: "2025-01-07", numWeeks: 7, timeSuffix: "141500" },
        { className: "svvz", startDate: "2025-01-07", numWeeks: 1, timeSuffix: "114500" },
        { className: "smyi", startDate: "2025-01-10", numWeeks: 1, timeSuffix: "114500" },
        { className: "sp6v", startDate: "2024-11-05", numWeeks: 1, timeSuffix: "131500" },
        { className: "sdbo", startDate: "2025-01-08", numWeeks: 6, timeSuffix: "093000" },
        { className: "s8ow", startDate: "2025-01-08", numWeeks: 6, timeSuffix: "103000" },
        { className: "sijm", startDate: "2025-01-08", numWeeks: 6, timeSuffix: "183000" },
        { className: "s785", startDate: "2025-02-14", numWeeks: 1, timeSuffix: "094500" },
        { className: "soqe", startDate: "2025-04-04", numWeeks: 1, timeSuffix: "094500" },
        { className: "s6ug", startDate: "2025-04-29", numWeeks: 1, timeSuffix: "131500" },
        { className: "sc9f", startDate: "2025-05-02", numWeeks: 1, timeSuffix: "094500" },
        { className: "stai", startDate: "2025-06-03", numWeeks: 1, timeSuffix: "131500" },
        { className: "sahv", startDate: "2025-06-06", numWeeks: 1, timeSuffix: "094500" },
        { className: "stiv", startDate: "2025-07-22", numWeeks: 1, timeSuffix: "131500" },
        { className: "ssvf", startDate: "2025-07-25", numWeeks: 1, timeSuffix: "094500" },
        { className: "sqbs", startDate: "2025-04-29", numWeeks: 4, timeSuffix: "104500" },
        { className: "shi8", startDate: "2025-04-30", numWeeks: 4, timeSuffix: "093000" },
        { className: "swzy", startDate: "2025-04-30", numWeeks: 4, timeSuffix: "103000" },
        { className: "swub", startDate: "2025-04-30", numWeeks: 4, timeSuffix: "183000" },
        { className: "swub", startDate: "2025-04-29", numWeeks: 4, timeSuffix: "141500" },
        { className: "s6cv", startDate: "2025-04-29", numWeeks: 4, timeSuffix: "141500" },
        { className: "s6ug", startDate: "2025-04-29", numWeeks: 1, timeSuffix: "094500" }
        
    ];

    classSchedules.forEach(schedule => {
        displayClassDates(schedule.className, schedule.startDate, schedule.numWeeks, schedule.timeSuffix);
    });
});
