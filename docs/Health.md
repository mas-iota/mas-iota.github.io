---
id: health
title: Health
sidebar_label: Health
keywords:
  - health
slug: /health
---

# `buildfire.services.health`
The BuildFire Health Service allows plugins to query [HealthKit](https://developer.apple.com/documentation/healthkit?language=objc) data. 

:::caution Info
This service works only on iOS devices
:::

## Requirements

### Widget

Include `healthAPI.js` file in widget header right after `buildfire.min.js`

```html
<head>
  // ...
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/components/health/healthAPI.js"></script>
</head>
```

## Methods

### `requestAuthorization()` <div class="label widget"></div>

`buildfire.health.requestAuthorization(dataTypes, callback)`

Requests read and write access to a set of data types. This method must be called before using the query methods, even if the authorization has already been given at some point in the past.

```javascript
const dataTypes = [
	'steps', 'distance',     // Read and write permissions
	{
		read: ['calories'],    // Read only permission
		write: ['temperature'] // Write only permission
	}
];
buildfire.services.health.requestAuthorization(dataTypes, err => {
	if (err) console.log(err);
});
```

#### `callback(err)`

Executed when the request is complete. Returns an error if something went wrong.

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `query()`<div class="label widget"></div>

`buildfire.health.query(options, callback)`

Fetches all the data points of a certain data type within a certain time window.

```javascript
const options = {
	dataType: "steps",
	limit: 1000,
	startDate: new Date(new Date().getTime() - (3 * 864e5)),
	endDate: new Date()
};

buildfire.health.query(options, (err, data) => {
	if (err) return console.error(err);

	console.log(data);
});
```

#### `options`

| Name        | Type   | Required | Description                                                                                                 | Default |
| ----------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| `dataType`  | string | yes      | Data type to query. See [Supported Data Types](https://sdk.buildfire.com/docs/health/#supported-data-types) | N/A     |
| `limit`     | number | no       | Sets a maximum number of returned values                                                                    | 1000    |
| `startDate` | Date   | yes      | Start date for the query                                                                                    | N/A     |
| `endDate`   | Date   | yes      | End date for the query                                                                                      | N/A     |

#### `callback(err, results)`

Callback function executed after query is complete

| Name      | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| `err`     | string | Error string, `null` when operation is successful |
| `results` | array  | Array of results                                  |

#### Result entries
| Name                | Type   | Description                                           |
| ------------------- | ------ | ----------------------------------------------------- |
| `id`                | string | Unique Identifier                                     |
| `unit`              | string | The unit of measure                                   |
| `value`             | number | Measured value                                        |
| `sourceName`        | string | Measuring device name                                 |
| `sourceBundleId`    | string | Measuring application bundleId                        |
| `sourceProductType` | string | Measuring device product identifier (ex: iPhone 12,2) |
| `sourceOSVersion`   | string | Measuring device OS version                           |
| `startDate`         | string | Starting date string                                  |
| `endDate`           | string | Ending date string                                    |

### `queryAggregated()`<div class="label widget"></div>

`buildfire.health.queryAggregated(options, callback)`

Fetches all the data points of a certain data type within a certain time window. Aggregates results into buckets.

```javascript
const options = {
	dataType: "steps",
	bucket: "day",
	startDate: new Date(new Date().getTime() - (3 * 864e5)),
	endDate: new Date()
};

buildfire.health.query(options, (err, data) => {
	if (err) return console.error(err);

	console.log(data);
});
```

#### `options`

| Name        | Type   | Required | Description                                                                                                 | Default |
| ----------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| `dataType`  | string | yes      | Data type to query. See [Supported Data Types](https://sdk.buildfire.com/docs/health/#supported-data-types) | N/A     |
| `bucket`    | string | no       | Time scale to segment data by                                                                               | N/A     |
| `startDate` | Date   | yes      | Start date for the query                                                                                    | N/A     |
| `endDate`   | Date   | yes      | End date for the query                                                                                      | N/A     |

#### `callback(err, results)`

Callback function executed after query is complete

| Name      | Type   | Description                                                             |
| --------- | ------ | ----------------------------------------------------------------------- |
| `err`     | string | Error string, `null` when operation is successful                       |
| `results` | array  | Array of results. If no bucket is passed, returns only the first object |

#### Result entries
| Name        | Type   | Description          |
| ----------- | ------ | -------------------- |
| `unit`      | string | The unit of measure  |
| `value`     | number | Measured value       |
| `startDate` | string | Starting date string |
| `endDate`   | string | Ending date string   |


## Supported data types

The Health service supports the following data types:

| Data type                          | Unit                                                                                                    | HealthKit equivalent                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| abdominal_cramps                   | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierAbdominalCramps                                                  |
| acne                               | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierAcne                                                             |
| activity                           | activityType                                                                                            | See [Supported Activites](https://sdk.buildfire.com/docs/health/#activities)             |
| activitySummary                    |                                                                                                         |                                                                                          |
| appetite_changes                   | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierAppetiteChanges                                                  |
| appleExerciseTime                  | min                                                                                                     | HKQuantityTypeIdentifierAppleExerciseTime                                                |
| audio_exposure_event               | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierAudioExposureEvent                                               |
| audiogram                          |                                                                                                         |                                                                                          |
| bladder_incontinence               | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierBladderIncontinence                                              |
| bloating                           | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierBloating                                                         |
| blood_alcohol_content              | percent                                                                                                 | HKQuantityTypeIdentifierBloodAlcoholContent                                              |
| blood_glucose                      | mmol/L                                                                                                  | HKQuantityTypeIdentifierBloodGlucose                                                     |
| blood_pressure                     | mmHg                                                                                                    | HKCorrelationTypeIdentifierBloodPressure                                                 |
| blood_pressure_diastolic           | mmHg                                                                                                    | HKQuantityTypeIdentifierBloodPressureDiastolic                                           |
| blood_pressure_systolic            | mmHg                                                                                                    | HKQuantityTypeIdentifierBloodPressureSystolic                                            |
| bmi                                | count                                                                                                   | HKQuantityTypeIdentifierBodyMassIndex                                                    |
| body_ache                          | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierGeneralizedBodyAche                                              |
| breast_pain                        | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierBreastPain                                                       |
| calories                           | kcal                                                                                                    | HKQuantityTypeIdentifierActiveEnergyBurned + HKQuantityTypeIdentifierBasalEnergyBurned   |
| calories.active                    | kcal                                                                                                    | HKQuantityTypeIdentifierActiveEnergyBurned                                               |
| calories.basal                     | kcal                                                                                                    | HKQuantityTypeIdentifierBasalEnergyBurned                                                |
| cervical_mucus_quality             | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierCervicalMucusQuality                                             |
| chills                             | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierChills                                                           |
| constipation                       | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierConstipation                                                     |
| contraceptives                     | [Type](https://developer.apple.com/documentation/healthkit/hkcategoryvaluecontraceptive)                | HKCategoryTypeIdentifierContraceptive                                                    |
| coughing                           | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierCoughing                                                         |
| date_of_birth                      |                                                                                                         | HKCharacteristicTypeIdentifierDateOfBirth                                                |
| diarrhea                           | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierDiarrhea                                                         |
| distance                           | m                                                                                                       | HKQuantityTypeIdentifierDistanceWalkingRunning + HKQuantityTypeIdentifierDistanceCycling |
| dizziness                          | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierDizziness                                                        |
| dry_skin                           | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierDrySkin                                                          |
| electrocardiogram                  |                                                                                                         |                                                                                          |
| electrodermal_activity             | Siemen                                                                                                  | HKQuantityTypeIdentifierElectrodermalActivity                                            |
| environmental_audio_exposure       | dB                                                                                                      | HKQuantityTypeIdentifierEnvironmentalAudioExposure // iOS 13+                            |
| environmental_audio_exposure_event | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent                                  |
| fainting                           | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierFainting                                                         |
| fat_percentage                     | %                                                                                                       | HKQuantityTypeIdentifierBodyFatPercentage                                                |
| fatigue                            | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierFatigue                                                          |
| fever                              | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierFever                                                            |
| flights_climbed                    | count                                                                                                   | HKQuantityTypeIdentifierFlightsClimbed                                                   |
| forced_expiratory_volume1          | L                                                                                                       | HKQuantityTypeIdentifierForcedExpiratoryVolume1                                          |
| forced_vital_capacity              | L                                                                                                       | HKQuantityTypeIdentifierForcedVitalCapacity                                              |
| gender                             |                                                                                                         | HKCharacteristicTypeIdentifierBiologicalSex                                              |
| hair_loss                          | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierHairLoss                                                         |
| handwashing_event                  | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierHandwashingEvent                                                 |
| headache                           | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierHeadache                                                         |
| headphone_audio_exposure           | dB                                                                                                      | HKQuantityTypeIdentifierHeadphoneAudioExposure                                           |
| headphone_audio_exposure_event     | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierHeadphoneAudioExposureEvent                                      |
| heart_rate                         | count/min                                                                                               | HKQuantityTypeIdentifierHeartRate                                                        |
| heart_rate                         | count/min                                                                                               | HKQuantityTypeIdentifierHeartRate                                                        |
| heart_rate_variability_sdnn        | ms                                                                                                      | HKQuantityTypeIdentifierHeartRateVariabilitySDNN                                         |
| heart_rate.resting                 | count/min                                                                                               | HKQuantityTypeIdentifierRestingHearRate                                                  |
| heart_rate.variability             | ms                                                                                                      | HKQuantityTypeIdentifierHeartRateVariabilitySDNN                                         |
| heartburn                          | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierHeartburn                                                        |
| height                             | m                                                                                                       | HKQuantityTypeIdentifierHeight                                                           |
| high_heart_rate_event              | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierHighHeartRateEvent                                               |
| hot_flashes                        | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierHotFlashes                                                       |
| inhaler_usage                      | count                                                                                                   | HKQuantityTypeIdentifierInhalerUsage                                                     |
| insulin                            | IU                                                                                                      | HKQuantityTypeIdentifierInsulinDelivery                                                  |
| intermenstrual_bleeding            | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierIntermenstrualBleeding                                           |
| irregular_heart_rhythm_event       | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierIrregularHeartRhythmEvent                                        |
| lactation                          | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierLactation                                                        |
| lean_body_mass                     | kg                                                                                                      | HKQuantityTypeIdentifierLeanBodyMass                                                     |
| loss_of_smell                      | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierLossOfSmell                                                      |
| loss_of_taste                      | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierLossOfTaste                                                      |
| low_cardio_event                   | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierLowCardioFitnessEvent                                            |
| low_heart_rate_event               | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierLowHeartRateEvent                                                |
| lower_back_pain                    | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierLowerBackPain                                                    |
| memory_lapse                       | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierMemoryLapse                                                      |
| menstrual_flow                     | [Flow](https://developer.apple.com/documentation/healthkit/hkcategoryvaluemenstrualflow)                | HKCategoryTypeIdentifierMenstrualFlow                                                    |
| mindfulness                        | min                                                                                                     | HKCategoryTypeIdentifierMindfulSession                                                   |
| mindfulness                        | sec                                                                                                     | HKCategoryTypeIdentifierMindfulSession                                                   |
| mood_changes                       | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierMoodChanges                                                      |
| nausea                             | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierNausea                                                           |
| night_sweats                       | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierNightSweats                                                      |
| number_of_alcoholic_beverages      | count                                                                                                   | HKQuantityTypeIdentifierNumberOfAlcoholicBeverages                                       |
| number_of_times_fallen             | count                                                                                                   | HKQuantityTypeIdentifierNumberOfTimesFallen                                              |
| nutrition                          |                                                                                                         | HKCorrelationTypeIdentifierFood                                                          |
| nutrition.biotin                   | mcg                                                                                                     | HKQuantityTypeIdentifierDietaryBiotin                                                    |
| nutrition.caffeine                 | g                                                                                                       | HKQuantityTypeIdentifierDietaryCaffeine                                                  |
| nutrition.calcium                  | mg                                                                                                      | HKQuantityTypeIdentifierDietaryCalcium                                                   |
| nutrition.calories                 | kcal                                                                                                    | HKQuantityTypeIdentifierDietaryEnergyConsumed                                            |
| nutrition.carbs.total              | g                                                                                                       | HKQuantityTypeIdentifierDietaryCarbohydrates                                             |
| nutrition.chloride                 | mg                                                                                                      | HKQuantityTypeIdentifierDietaryChloride                                                  |
| nutrition.cholesterol              | mg                                                                                                      | HKQuantityTypeIdentifierDietaryCholesterol                                               |
| nutrition.chromium                 | mcg                                                                                                     | HKQuantityTypeIdentifierDietaryChromium                                                  |
| nutrition.copper                   | mg                                                                                                      | HKQuantityTypeIdentifierDietaryCopper                                                    |
| nutrition.dietary_fiber            | g                                                                                                       | HKQuantityTypeIdentifierDietaryFiber                                                     |
| nutrition.fat.monounsaturated      | g                                                                                                       | HKQuantityTypeIdentifierDietaryFatMonounsaturated                                        |
| nutrition.fat.polyunsaturated      | g                                                                                                       | HKQuantityTypeIdentifierDietaryFatPolyunsaturated                                        |
| nutrition.fat.saturated            | g                                                                                                       | HKQuantityTypeIdentifierDietaryFatSaturated                                              |
| nutrition.fat.total                | g                                                                                                       | HKQuantityTypeIdentifierDietaryFatTotal                                                  |
| nutrition.folate                   | mcg                                                                                                     | HKQuantityTypeIdentifierDietaryFolate                                                    |
| nutrition.iodine                   | mcg                                                                                                     | HKQuantityTypeIdentifierDietaryIodine                                                    |
| nutrition.iron                     | mg                                                                                                      | HKQuantityTypeIdentifierDietaryIron                                                      |
| nutrition.magnesium                | mg                                                                                                      | HKQuantityTypeIdentifierDietaryMagnesium                                                 |
| nutrition.molybdenum               | mg                                                                                                      | HKQuantityTypeIdentifierDietaryMolybdenum                                                |
| nutrition.niacin                   | mg                                                                                                      | HKQuantityTypeIdentifierDietaryNiacin                                                    |
| nutrition.pantothenic_acid         | mg                                                                                                      | HKQuantityTypeIdentifierDietaryPantothenicAcid                                           |
| nutrition.phosphorus               | mg                                                                                                      | HKQuantityTypeIdentifierDietaryPhosphorus                                                |
| nutrition.potassium                | mg                                                                                                      | HKQuantityTypeIdentifierDietaryPotassium                                                 |
| nutrition.protein                  | g                                                                                                       | HKQuantityTypeIdentifierDietaryProtein                                                   |
| nutrition.riboflavin               | mg                                                                                                      | HKQuantityTypeIdentifierDietaryRiboflavin                                                |
| nutrition.selenium                 | mcg                                                                                                     | HKQuantityTypeIdentifierDietarySelenium                                                  |
| nutrition.sodium                   | mg                                                                                                      | HKQuantityTypeIdentifierDietarySodium                                                    |
| nutrition.sugar                    | g                                                                                                       | HKQuantityTypeIdentifierDietarySugar                                                     |
| nutrition.thiamin                  | mg                                                                                                      | HKQuantityTypeIdentifierDietaryThiamin                                                   |
| nutrition.vitamin_a                | mcg (HK), IU (GF)                                                                                       | HKQuantityTypeIdentifierDietaryVitaminA                                                  |
| nutrition.vitamin_B12              | mcg                                                                                                     | HKQuantityTypeIdentifierDietaryVitaminB12                                                |
| nutrition.vitamin_B6               | mg                                                                                                      | HKQuantityTypeIdentifierDietaryVitaminB6                                                 |
| nutrition.vitamin_c                | mg                                                                                                      | HKQuantityTypeIdentifierDietaryVitaminC                                                  |
| nutrition.vitamin_D                | mcg                                                                                                     | HKQuantityTypeIdentifierDietaryVitaminD                                                  |
| nutrition.vitamin_E                | mg                                                                                                      | HKQuantityTypeIdentifierDietaryVitaminE                                                  |
| nutrition.vitamin_K                | mcg                                                                                                     | HKQuantityTypeIdentifierDietaryVitaminK                                                  |
| nutrition.water                    | ml                                                                                                      | HKQuantityTypeIdentifierDietaryWater                                                     |
| nutrition.zinc                     | mg                                                                                                      | HKQuantityTypeIdentifierDietaryZinc                                                      |
| ovulation_test_result              | [Result](https://developer.apple.com/documentation/healthkit/hkcategoryvalueovulationtestresult)        | HKCategoryTypeIdentifierOvulationTestResult                                              |
| oxygen_saturation                  | %                                                                                                       | HKQuantityTypeIdentifierOxygenSaturation                                                 |
| peak_expiratory_flow_rate          | L/min                                                                                                   | HKQuantityTypeIdentifierPeakExpiratoryFlowRate                                           |
| pelvic_pain                        | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierPelvicPain                                                       |
| peripheral_perfusion_index         | percent                                                                                                 | HKQuantityTypeIdentifierPeripheralPerfusionIndex                                         |
| pregnancy                          | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierPregnancy                                                        |
| pregnancy_test_result              | [Result](https://developer.apple.com/documentation/healthkit/hkcategoryvaluepregnancytestresult)        | HKCategoryTypeIdentifierPregnancyTestResult                                              |
| progesterone_test_result           | [Result](https://developer.apple.com/documentation/healthkit/hkcategoryvalueprogesteronetestresult)     | HKCategoryTypeIdentifierProgesteroneTestResult                                           |
| rapid_or_fluttering_heartbeat      | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierRapidPoundingOrFlutteringHeartbeat                               |
| resp_rate                          | count/min                                                                                               | HKQuantityTypeIdentifierRespiratoryRate                                                  |
| runny_nose                         | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierRunnyNose                                                        |
| sexual_activity                    | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierSexualActivity                                                   |
| shortness_of_breath                | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierShortnessOfBreath                                                |
| sinus_congestion                   | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierSinusCongestion                                                  |
| six_minute_walk_test_distance      | m                                                                                                       | HKQuantityTypeIdentifierSixMinuteWalkTestDistance                                        |
| skipped_heartbeat                  | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierSkippedHeartbeat                                                 |
| sleep                              | N/A                                                                                                     | HKCategoryTypeIdentifierSleepAnalysis                                                    |
| sleep_changes                      | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierSleepChanges                                                     |
| sore_throat                        | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierSoreThroat                                                       |
| stair_ascent_speed                 | m/s                                                                                                     | HKQuantityTypeIdentifierStairAscentSpeed                                                 |
| stair_descent_speed                | m/s                                                                                                     | HKQuantityTypeIdentifierStairDescentSpeed                                                |
| stairs                             | count                                                                                                   | HKQuantityTypeIdentifierFlightsClimbed                                                   |
| stand_time                         | min                                                                                                     | HKQuantityTypeIdentifierDietaryVitaminE                                                  |
| steps                              | count                                                                                                   | HKQuantityTypeIdentifierStepCount                                                        |
| temperature                        | Celsius                                                                                                 | HKQuantityTypeIdentifierBodyTemperature                                                  |
| temperature.basal                  | degC                                                                                                    | HKQuantityTypeIdentifierBasalBodyTemperature                                             |
| tightness_or_pain                  | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierChestTightnessOrPain                                             |
| toothbrushing_event                | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierToothbrushingEvent                                               |
| uv_exposure                        | count                                                                                                   | HKQuantityTypeIdentifierUVExposure                                                       |
| vaginal_dryness                    | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierVaginalDryness                                                   |
| vo2max                             | ml/(kg * min)                                                                                           | HKQuantityTypeIdentifierVO2Max                                                           |
| vomiting                           | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierVomiting                                                         |
| waist_circumference                | m                                                                                                       | HKQuantityTypeIdentifierWaistCircumference                                               |
| walking_asymmetry_percentage       | percent                                                                                                 | HKQuantityTypeIdentifierWalkingAsymmetryPercentage                                       |
| walking_double_support_percentage  | percent                                                                                                 | HKQuantityTypeIdentifierWalkingDoubleSupportPercentage                                   |
| walking_speed                      | m/s                                                                                                     | HKQuantityTypeIdentifierWalkingSpeed                                                     |
| walking_steadiness                 | percent                                                                                                 | HKQuantityTypeIdentifierAppleWalkingSteadiness                                           |
| walking_steadiness_event           | [N/A](https://developer.apple.com/documentation/healthkit/hkcategoryvalue/hkcategoryvaluenotapplicable) | HKCategoryTypeIdentifierAppleWalkingSteadinessEvent                                      |
| walking_step_length                | cm                                                                                                      | HKQuantityTypeIdentifierWalkingStepLength                                                |
| weight                             | kg                                                                                                      | HKQuantityTypeIdentifierBodyMass                                                         |
| wheezing                           | [Severity](https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity)                 | HKCategoryTypeIdentifierWheezing                                                         |


## Activities
The following activities are supported. Pass the Activity Name as `dataType` to `query` or `queryAggregated`.

| activity name                    | HealthKit equivalent                               |
| -------------------------------- | -------------------------------------------------- |
| archery                          | HKWorkoutActivityTypeArchery                       |
| badminton                        | HKWorkoutActivityTypeBadminton                     |
| barre                            | HKWorkoutActivityTypeBarre                         |
| baseball                         | HKWorkoutActivityTypeBaseball                      |
| basketball                       | HKWorkoutActivityTypeBasketball                    |
| biking                           | HKWorkoutActivityTypeCycling                       |
| biking.hand                      | HKWorkoutActivityTypeHandCycling                   |
| biking.mountain                  | HKWorkoutActivityTypeCycling                       |
| biking.road                      | HKWorkoutActivityTypeCycling                       |
| biking.spinning                  | HKWorkoutActivityTypeCycling                       |
| biking.stationary                | HKWorkoutActivityTypeCycling                       |
| biking.utility                   | HKWorkoutActivityTypeCycling                       |
| bowling                          | HKWorkoutActivityTypeBowling                       |
| boxing                           | HKWorkoutActivityTypeBoxing                        |
| cooldown                         | HKWorkoutActivityTypeCooldown                      |
| core_training                    | HKWorkoutActivityTypeCoreTraining                  |
| cricket                          | HKWorkoutActivityTypeCricket                       |
| crossfit                         | HKWorkoutActivityTypeCrossTraining                 |
| curling                          | HKWorkoutActivityTypeCurling                       |
| dancing                          | HKWorkoutActivityTypeCardioDance                   |
| dancing.social                   | HKWorkoutActivityTypeSocialDance                   |
| disc_sports                      | HKWorkoutActivityTypeDiscSports                    |
| diving                           | HKWorkoutActivityTypeWaterSports                   |
| elliptical                       | HKWorkoutActivityTypeElliptical                    |
| fencing                          | HKWorkoutActivityTypeFencing                       |
| fishing                          | HKWorkoutActivityTypeFishing                       |
| fitness_gaming                   | HKWorkoutActivityTypeFitnessGaming                 |
| flexibility                      | HKWorkoutActivityTypeFlexibility                   |
| football.american                | KWorkoutActivityTypeAmericanFootball               |
| football.australian              | HKWorkoutActivityTypeAustralianFootball            |
| football.soccer                  | HKWorkoutActivityTypeSoccer                        |
| functional_strength              | HKWorkoutActivityTypeFunctionalStrengthTraining    |
| golf                             | HKWorkoutActivityTypeGolf                          |
| gymnastics                       | HKWorkoutActivityTypeGymnastics                    |
| handball                         | KWorkoutActivityTypeHandball                       |
| hiking                           | HKWorkoutActivityTypeHiking                        |
| hockey                           | HKWorkoutActivityTypeHockey                        |
| horseback_riding                 | HKWorkoutActivityTypeEquestrianSports              |
| hunting                          | HKWorkoutActivityTypeHunting                       |
| ice_skating                      | HKWorkoutActivityTypeSkatingSports                 |
| interval_training                | HKWorkoutActivityTypeHighIntensityIntervalTraining |
| interval_training.high_intensity | HKWorkoutActivityTypeHighIntensityIntervalTraining |
| jump_rope                        | HKWorkoutActivityTypeJumpRope                      |
| kayaking                         | HKWorkoutActivityTypePaddleSports                  |
| kick_scooter                     | HKWorkoutActivityTypeCycling                       |
| kickboxing                       | HKWorkoutActivityTypeKickboxing                    |
| lacrosse                         | HKWorkoutActivityTypeLacrosse                      |
| martial_arts                     | HKWorkoutActivityTypeMartialArts                   |
| martial_arts.mixed               | HKWorkoutActivityTypeMartialArts                   |
| meditation                       | HKWorkoutActivityTypeMindAndBody                   |
| mixed_metabolic_cardio           | HKWorkoutActivityTypeMixedCardio                   |
| other                            | HKWorkoutActivityTypeOther                         |
| paddle_sports                    | HKWorkoutActivityTypePaddleSports                  |
| pickleball                       | HKWorkoutActivityTypePickleball                    |
| pilates                          | HKWorkoutActivityTypePilates                       |
| play                             | HKWorkoutActivityTypePlay                          |
| preparation_and_recovery         | HKWorkoutActivityTypePreparationAndRecovery        |
| racquetball                      | HKWorkoutActivityTypeRacquetball                   |
| rock_climbing                    | HKWorkoutActivityTypeClimbing                      |
| rowing                           | HKWorkoutActivityTypeRowing                        |
| rowing.machine                   | HKWorkoutActivityTypeRowing                        |
| rugby                            | HKWorkoutActivityTypeRugby                         |
| running                          | HKWorkoutActivityTypeRunning                       |
| running.jogging                  | HKWorkoutActivityTypeRunning                       |
| running.sand                     | HKWorkoutActivityTypeRunning                       |
| running.treadmill                | HKWorkoutActivityTypeRunning                       |
| sailing                          | HKWorkoutActivityTypeSailing                       |
| scuba_diving                     | HKWorkoutActivityTypeWaterSports                   |
| skateboarding                    | HKWorkoutActivityTypeSkatingSports                 |
| skating                          | HKWorkoutActivityTypeSkatingSports                 |
| skating.cross                    | HKWorkoutActivityTypeSkatingSports                 |
| skating.indoor                   | HKWorkoutActivityTypeSkatingSports                 |
| skating.inline                   | HKWorkoutActivityTypeSkatingSports                 |
| skiing                           | HKWorkoutActivityTypeSnowSports                    |
| skiing.back_country              | HKWorkoutActivityTypeSnowSports                    |
| skiing.cross_country             | HKWorkoutActivityTypeCrossCountrySkiing            |
| skiing.downhill                  | HKWorkoutActivityTypeDownhillSkiing                |
| skiing.kite                      | HKWorkoutActivityTypeSnowSports                    |
| skiing.roller                    | HKWorkoutActivityTypeSnowSports                    |
| sledding                         | HKWorkoutActivityTypeSnowSports                    |
| sleep                            | HKCategoryValueSleepAnalysisAsleep                 |
| sleep.awake                      | HKCategoryValueSleepAnalysisAwake                  |
| sleep.deep                       | HKCategoryValueSleepAnalysisAsleep                 |
| sleep.inBed                      | HKCategoryValueSleepAnalysisInBed                  |
| sleep.light                      | HKCategoryValueSleepAnalysisAsleep                 |
| sleep.rem                        | HKCategoryValueSleepAnalysisAsleep                 |
| snow_sports                      | HKWorkoutActivityTypeSnowSports                    |
| snowboarding                     | HKWorkoutActivityTypeSnowboarding                  |
| snowmobile                       | HKWorkoutActivityTypeSnowSports                    |
| snowshoeing                      | HKWorkoutActivityTypeSnowSports                    |
| softball                         | HKWorkoutActivityTypeSoftball                      |
| squash                           | HKWorkoutActivityTypeSquash                        |
| stair_climbing                   | HKWorkoutActivityTypeStairClimbing                 |
| stair_climbing.machine           | HKWorkoutActivityTypeStepTraining                  |
| stairs                           | HKWorkoutActivityTypeStairs                        |
| standup_paddleboarding           | HKWorkoutActivityTypePaddleSports                  |
| strength_training                | HKWorkoutActivityTypeTraditionalStrengthTraining   |
| surfing                          | HKWorkoutActivityTypeSurfingSports                 |
| swimming                         | HKWorkoutActivityTypeSwimming                      |
| swimming.open_water              | HKWorkoutActivityTypeSwimming                      |
| swimming.pool                    | HKWorkoutActivityTypeSwimming                      |
| table_tennis                     | HKWorkoutActivityTypeTableTennis                   |
| tai_chi                          | HKWorkoutActivityTypeTaiChi                        |
| tennis                           | HKWorkoutActivityTypeTennis                        |
| track_and_field                  | HKWorkoutActivityTypeTrackAndField                 |
| volleyball                       | HKWorkoutActivityTypeVolleyball                    |
| volleyball.beach                 | HKWorkoutActivityTypeVolleyball                    |
| volleyball.indoor                | HKWorkoutActivityTypeVolleyball                    |
| wakeboarding                     | HKWorkoutActivityTypeWaterSports                   |
| walking                          | HKWorkoutActivityTypeWalking                       |
| walking.fitness                  | HKWorkoutActivityTypeWalking                       |
| walking.nordic                   | HKWorkoutActivityTypeWalking                       |
| walking.stroller                 | HKWorkoutActivityTypeWalking                       |
| walking.treadmill                | HKWorkoutActivityTypeWalking                       |
| water_fitness                    | HKWorkoutActivityTypeWaterFitness                  |
| water_polo                       | HKWorkoutActivityTypeWaterPolo                     |
| water_sports                     | HKWorkoutActivityTypeWaterSports                   |
| weightlifting                    | HKWorkoutActivityTypeTraditionalStrengthTraining   |
| wheelchair                       | HKWorkoutActivityTypeWheelchairRunPace             |
| wheelchair.runpace               | HKWorkoutActivityTypeWheelchairRunPace             |
| wheelchair.walkpace              | HKWorkoutActivityTypeWheelchairWalkPace            |
| windsurfing                      | HKWorkoutActivityTypeWaterSports                   |
| wrestling                        | HKWorkoutActivityTypeWrestling                     |
| yoga                             | HKWorkoutActivityTypeYoga                          |

## Audiograms

Audiogram samples contain an array of `sensitivityPoints`, which define hearing sensitivity at various frequencies:

```javascript
{
	sensitivityPoints: [
		{
			frequency: "250",
			frequencyUnit: "Hz",
			leftEarSensitivity: 14.6,
			rightEarSensitivity: 7.5,
			sensitivityUnit: "dBHL" // Decibels hearing level
		},
		{
			frequency: "500",
			frequencyUnit: "Hz",
			leftEarSensitivity: 16.2,
			rightEarSensitivity: 6.7,
			sensitivityUnit: "dBHL" // Decibels hearing level
		},
		// ... 
	]
}
```

## Electrocardiograms

Electrocardiogram samples contain the following data:

| Name                  | Type   | Description                                                                   |
| --------------------- | ------ | ----------------------------------------------------------------------------- |
| `algorithmVersion`    | Number | Version numbers for the algorithm Apple Watch uses to generate an ECG reading |
| `averageHeartRate`    | Number | Average heart rate over ECG duration                                          |
| `classification`      | String | ECG’s classification (ex: "SinusRhythm")                                      |
| `samplingFrequency`   | Number | The frequency at which the voltage is sampled                                 |
| `voltageMeasurements` | Array  | Collection of voltage values representing waveforms                           |

### Example
```javascript
{
	id: "ECF3C1B4-AEFA-4656-B7F2-B110951835EA",
	startDate: "2021-06-06T11:11:43.000Z",
	endDate: "2021-06-06T11:12:13.000Z", 
	algorithmVersion: 1,
	averageHeartRate: 62,
	classification: "SinusRhythm",
	samplingFrequency: 513.7265625,
	sourceName: "ECG",
	sourceBundleId: "com.apple.NanoHeartRhythm",
	sourceProductType: "Watch5,4",
	sourceOSVersion: "7.4.1",
	deviceName: "Apple Watch",
	deviceModel: "Watch", 
	deviceManufacturer: "Apple Inc.",
	deviceLocalIdentifier: "",
	deviceHardwareVersion: "Watch5,4",
	deviceSoftwareVersion: "7.4.1",
	deviceFirmwareVersion: "",
	voltageMeasurements: [
		[0,-0.00016570074462890624],
		[0.0019465608224219476,-0.00019473405456542969],
		[0.003893121644843895,-0.00021828952026367186],
		[0.005839682467265842,-0.00023469168090820312],
		[0.00778624328968779,-0.00024280212402343749]
		// ...
	]
}
```
