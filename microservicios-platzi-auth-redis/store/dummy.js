// Creo la base de datos
const db = {
    // Creo la tabla 'user'
    'recipe':[
        {   id: '1', name: 'Asado con arroz y ensalada', description: 'Ingredientes: Carne, limon, arroz, tomate, lechuga, cebolla'   },
        {   id: '2', name: 'Pollo con papas al horno', description: 'Ingredientes: Pollo, limon y papa'   },
        {   id: '3', name: 'Alitas BBQ con papas fritas', description: 'Ingredientes: Pollo, ketchup y papa'   },
        {   id: '4', name: 'Milanesa napolitana de carne con ensalada y papas fritas', description: 'Ingredientes: Carne, tomate, queso, limon y papa'   },
        {   id: '5', name: 'Ensalada Cesar', description: 'Ingredientes: Pollo, queso y lechuga'   },
        {   id: '6', name: 'Ensalada de pollo caprese', description: 'Ingredientes: Tomate, lechuga, pollo'   },
    ],
    // Creo la tabla 'ingredients'
    'ingredients':[
        {   id: '1', recipe_id: 1, ingredient_id: 9, quantity: 3   },
        {   id: '2', recipe_id: 1, ingredient_id: 2, quantity: 1   },
        {   id: '3', recipe_id: 1, ingredient_id: 4, quantity: 1   },
        {   id: '4', recipe_id: 1, ingredient_id: 1, quantity: 2   },
        {   id: '5', recipe_id: 1, ingredient_id: 6, quantity: 1   },
        {   id: '6', recipe_id: 1, ingredient_id: 7, quantity: 2   },

        {   id: '7', recipe_id: 2, ingredient_id: 10, quantity: 2   },
        {   id: '8', recipe_id: 2, ingredient_id: 2, quantity: 1   },
        {   id: '9', recipe_id: 2, ingredient_id: 3, quantity: 2   },

        {   id: '10', recipe_id: 3, ingredient_id: 10, quantity: 1   },
        {   id: '11', recipe_id: 3, ingredient_id: 5, quantity: 1   },
        {   id: '12', recipe_id: 3, ingredient_id: 3, quantity: 2   },

        {   id: '13', recipe_id: 4, ingredient_id: 9, quantity: 2   },
        {   id: '14', recipe_id: 4, ingredient_id: 1, quantity: 2   },
        {   id: '15', recipe_id: 4, ingredient_id: 8, quantity: 1   },
        {   id: '16', recipe_id: 4, ingredient_id: 2, quantity: 1   },
        {   id: '17', recipe_id: 4, ingredient_id: 3, quantity: 2   },

        {   id: '18', recipe_id: 5, ingredient_id: 10, quantity: 1   },
        {   id: '19', recipe_id: 5, ingredient_id: 8, quantity: 1   },
        {   id: '20', recipe_id: 5, ingredient_id: 6, quantity: 2   },

        {   id: '21', recipe_id: 6, ingredient_id: 1, quantity: 1   },
        {   id: '22', recipe_id: 6, ingredient_id: 6, quantity: 1   },
        {   id: '23', recipe_id: 6, ingredient_id: 10, quantity: 1   },
    ],
    // Creo la tabla 'ingredient'
    'ingredient':[
        {   id: '1', name: 'tomato', quantity: 5  },
        {   id: '2', name: 'lemon', quantity: 5  },
        {   id: '3', name: 'potato', quantity: 5  },
        {   id: '4', name: 'rice', quantity: 5  },
        {   id: '5', name: 'ketchup', quantity: 5  },
        {   id: '6', name: 'lettuce', quantity: 5  },
        {   id: '7', name: 'onion', quantity: 5  },
        {   id: '8', name: 'cheese', quantity: 5  },
        {   id: '9', name: 'meat', quantity: 5  },
        {   id: '10', name: 'chicken', quantity: 5  },
    ]
};

// Retorna la tabla de la BD
async function list(table) {
    return db[table];
}

// Agarra la informacion de la tabla y devuelve 
async function get(table, id) {
    let dataCollection = await list(table)
    return dataCollection.filter(item => item.id === id)[0] || null;
}

// Update + Insert aca se pushea la data que se recibe a db[collection]
async function upsert(table, data) {
    db[collection].push(data);
}

// Elimina un item de la tabla a traves de su id
async function remove(table, id) {
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};