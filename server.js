const Sequelize= require('sequelize');
const {UUID, UUIDV, STRING} = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgress://localhost/acme-country-club-db');


const Member = conn.define('member'), {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    }
    name: {
        type: STRING(20),
        alllowNull: false
    }
};

const Facility = conn.define('facility'), {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    }
    name: {
        type: STRING(20),
        alllowNull: false
    }
}

const Booking = conn.define('booking'), {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    }
}

// Member.belongsTo(Member, as ('sponsor'))

const start = async()=>{
try{
    await conn.sync({ force: true});
    console.log('starting');
    const [moe, lucy, larry, ethyl] = await Promise.all(
        ['moe', 'lucy', 'larry', 'ethyl'].map(name => Member.create({ name }))
    );
    console.log(moe.name);
}
catch(ex){
    cosole.log(ex)
}
}

start();