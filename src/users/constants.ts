import { registerEnumType } from "@nestjs/graphql";

export enum PlayerPosition {
    REVES,
    DRIVE
}

export enum PlayerLevel {
    PRO,
    PRIMERA,
    SEGUNDA,
    TERCERA,
    CUARTA,
    QUINTA
}

export enum PlayerPredominantHand {
    DERECHA,
    IZQUIERDA
}

export enum Country {
    SPAIN,
    ARGENTINA,
    SUECIA,
    FRANCIA,
    ITALIA,
    BRASIL,
    PORTUGAL
}

export enum Shot {
    REVES,
    DERECHA,
    VOLEA_DERECHA,
    VOLEA_REVES,
    BANDEJA,
    SMASH,
    DEJADA,
    SAQUE
}

registerEnumType(PlayerPosition, {
    name: 'PlayerPosition',
});

registerEnumType(PlayerLevel, {
    name: 'PlayerLevel',
});

registerEnumType(PlayerPredominantHand, {
    name: 'PlayerPredominantHand',
});

registerEnumType(Country, {
    name: 'Country',
});

registerEnumType(Shot, {
    name: 'Shot',
});