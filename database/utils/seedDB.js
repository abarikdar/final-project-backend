const { Animal, Task } = require('../models');

const seedDB = async () => {
	const dummyAnimal = await Animal.create({
        name: "Tobi",
        species: "Cat",
        breed: "Domesticated Shorthair",
        age: 1,
        healthStatus: "Healthy",
        adoptionStatus: "Adopted",
        arrivalDate: 2023-0o6-12,
        description: "playful, active, and friendly"
    
	});

	const dummyTask = await Task.create({
        description: "Examination",
        priority: "Low",
        dueDate: 2023-0o6-30,
        status: "Incomplete",
        assignedTo: "Tom",
        animalID: "1"

	});

	await dummyTask.setAnimal(dummyAnimal);
	
}

module.exports = seedDB;