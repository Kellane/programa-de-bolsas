'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
    {
      title: "Synergistic national hardware",
      description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      createdAt: new Date(),
      updatedAt: new Date(),
     
    }, {
      title: "Object-based dedicated throughput",
      description: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      createdAt: new Date(),
      updatedAt: new Date(),
     
    }, {
      title: "Future-proofed bi-directional collaboration",
      description: "In congue. Etiam justo. Etiam pretium iaculis justo ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      createdAt: new Date(),
      updatedAt: new Date(),
    
    }, {
      title: "Adaptive encompassing solution",
      description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tem.",
      createdAt: new Date(),
      updatedAt: new Date(),
     
    }, {
      title: "Public-key local portal",
      description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, .",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {})
  }
};
