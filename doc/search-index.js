var searchIndex={};
searchIndex["rsim"] = {"doc":"","i":[[0,"simulation","rsim","A collection of restaurant simulation representations",null,null],[3,"ShelfItem","rsim::simulation","An item on the shelf",null,null],[12,"order_value","","The current order value calculated by the simulation (see…",0,null],[12,"age","","The number of seconds this item has been on a shelf",0,null],[12,"order","","The associated order details of this shelf item",0,null],[3,"Driver","","A driver going to pick up an order",null,null],[12,"time_til_arrival","","The time to arrival in seconds",1,null],[12,"order_id","","A unique identifier of the oder this driver is to pickup",1,null],[3,"Shelf","","A shelf that holds a limited amount of items",null,null],[12,"name","","The name of this shelf",2,null],[12,"items","","Items this shelf is holding",2,null],[12,"capacity","","The max capacity of this shelf",2,null],[12,"decay_modifier","","The decay modifier of this shelf",2,null],[3,"RestaurantSimulation","","A simulation of a restaurant where orders are created and…",null,null],[12,"timer","","A timer of seconds used for calculating how long its been…",3,null],[12,"age","","The total number of seconds this simulation has been running",3,null],[12,"configuration","","Configuration for this simulation",3,null],[12,"shelves","","A list of shelves contained in the restaurant",3,null],[12,"trash","","A shelf specifically for trash",3,null],[12,"orders","","A source of orders for this simulation to use",3,null],[12,"drivers","","A list of active drivers who are enroute to pickup orders",3,null],[3,"Order","","An order of food",null,null],[12,"id","","A unique id for this order",4,null],[12,"name","","The name of this order item",4,null],[12,"temp","","The temperature this order would like to be stored in",4,null],[12,"shelf_life","","The shelf life in seconds this item can stay fresh before…",4,null],[12,"decay_rate","","The rate at which this item decays",4,null],[3,"Configuration","","A configuration for a restaurant simuation",null,null],[17,"SHELF_HOT","","Shelf index for hot items",null,null],[17,"SHELF_COLD","","Shelf index for cold items",null,null],[17,"SHELF_FROZEN","","Shelf index for frozen items",null,null],[17,"SHELF_OVERFLOW","","Shelf index for overflow items",null,null],[17,"HOT","","String representation of hot temperature",null,null],[17,"COLD","","String representation of cold temperature",null,null],[17,"FROZEN","","String representation of frozen temperature",null,null],[11,"remove_order","","Removes an order determined by an order id and return a…",3,[[["str"],["self"]],["bool"]]],[11,"run","","Advance the simulation by a number of seconds and returns…",3,[[["self"],["u32"]],[["vec",["string"]],["result",["vec","str"]],["str"]]]],[11,"to_json","","Generate a json string serialized form of the simulation",3,[[["self"]],[["str"],["result",["string","str"]],["string"]]]],[0,"wasm","rsim","The glue between javascript and web assembly to run a…",null,null],[3,"SIMULATION","rsim::wasm","Global restaurant simulation instance.",null,null],[5,"log","","Log a str to the screen",null,[[["str"]]]],[5,"error","","Log an error message",null,[[["str"]]]],[5,"set_view_items","","Log an error message",null,[[["str"]]]],[5,"random_f32","","Generate a random f32",null,[[],["f32"]]],[5,"malloc","","Allocate some memory in our web assembly module from…",null,[[["usize"]]]],[5,"rsim_log","","Log a C cstring to javascript",null,null],[5,"rsim_error","","Log a an error C cstring to javascript",null,null],[5,"rsim_set_view_items","","Send the shelf items as json to javascript",null,null],[5,"rsim_rand","","Generate a random f32 from javascript",null,null],[11,"from","rsim::simulation","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","rsim::wasm","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"clone","rsim::simulation","",0,[[["self"]],["shelfitem"]]],[11,"clone","","",4,[[["self"]],["order"]]],[11,"default","","Returns a restaurant simulation with default shelves (hot,…",3,[[],["self"]]],[11,"default","","Returns a default configuration",5,[[],["self"]]],[11,"deref","rsim::wasm","",6,[[["self"]],["mutex"]]],[11,"fmt","rsim::simulation","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",5,[[["formatter"],["self"]],["result"]]],[11,"serialize","","",0,[[["self"],["__s"]],["result"]]],[11,"serialize","","",1,[[["self"],["__s"]],["result"]]],[11,"serialize","","",2,[[["self"],["__s"]],["result"]]],[11,"serialize","","",3,[[["self"],["__s"]],["result"]]],[11,"serialize","","",4,[[["self"],["__s"]],["result"]]],[11,"serialize","","",5,[[["self"],["__s"]],["result"]]],[11,"deserialize","","",0,[[["__d"]],["result"]]],[11,"deserialize","","",1,[[["__d"]],["result"]]],[11,"deserialize","","",2,[[["__d"]],["result"]]],[11,"deserialize","","",3,[[["__d"]],["result"]]],[11,"deserialize","","",4,[[["__d"]],["result"]]],[11,"deserialize","","",5,[[["__d"]],["result"]]],[11,"initialize","rsim::wasm","",6,[[["self"]]]]],"p":[[3,"ShelfItem"],[3,"Driver"],[3,"Shelf"],[3,"RestaurantSimulation"],[3,"Order"],[3,"Configuration"],[3,"SIMULATION"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);