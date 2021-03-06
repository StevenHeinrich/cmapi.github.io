cmapi.channel["map.feature.edit"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.feature.edit",
        "description": "Message to notify the map to begin editing an existing feature. The map is responsible for providing the user interface to enable visual editing of the feature.",
        "type": "object",
        "properties": {
            "overlayId": {
                "description": "The id of the overlay the feature that is to be edited.",
                "type": "string"
            },
            "featureId": {
                "description": "The unique identifier for the feature to be edited. ",
                "type": "string"
            },
            "messageId": {
                "description": "A unique id allowing the map to dispatch a response to this message.  See map.message channels.",
                "type": "string"
            }
        },
        "required": ["featureId", "overlayId", "messageId"]
    },
    notes: [
        "If a Map initiates an edit it SHALL send a map.feature.edit message with a messageId so other widgets are aware that an edit has begun.",
        "If a widget initiates an edit it SHALL send a map.feature.edit message with a messageId which the map will listen to and go into edit mode for the given feature.",
        "During an edit when a user modifies the feature, a map SHALL send a map.message.progress message each time the feature is manipulated during an edit. ",
        "A widget MAY issue a map.message.cancel message if the user wishes to cancel an edit.  The map SHALL issue a map.message.complete message with the messageId of the map.feature.edit message and a status of “canceled”.  The details object of the map.message.complete will contain the coordinates of the feature before the edit began ",
        "A map SHALL send a map.message.complete with the messageId matching the original map.feature.edit message’s messageId and final coordinates of the edited feature",
        "A map SHALL send a map.feature.plot message after the user completes and commits the edit so other widgets receive the final state of the edited feature.  The map SHALL NOT issue a map.feature.plot message if the edit is cancelled."
    ]
};
