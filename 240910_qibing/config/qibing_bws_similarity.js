var TestConfig = {
  "TestName": "Speaker Similarity Evaluation (BWS)",
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "shoinoue@link.cuhk.edu.cn",
  "AudioRoot": "",
  "Testsets":
[
  {
    "Name": "arctic_b0344",
    "TestID": "BWSSIM---arctic_b0344---NCC",
    "Text": "Lots of men take women buggy riding.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_NCC/arctic_b0344.wav",
      "Z": "./audio/20240815_spaccent/ours_NCC/arctic_b0344.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0344.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0344.wav",
      "W": "./audio/20240815_spaccent/baseline_NCC/arctic_b0344.wav",
    }
  },
  {
    "Name": "arctic_b0031",
    "TestID": "BWSSIM---arctic_b0031---NCC",
    "Text": "Gregson had seated himself under the lamp and was sharpening a pencil.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_NCC/arctic_b0031.wav",
      "Z": "./audio/20240815_spaccent/ours_NCC/arctic_b0031.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0031.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0031.wav",
      "W": "./audio/20240815_spaccent/baseline_NCC/arctic_b0031.wav",
    }
  },
  {
    "Name": "arctic_b0344",
    "TestID": "BWSSIM---arctic_b0344---LXC",
    "Text": "Lots of men take women buggy riding.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_LXC/arctic_b0344.wav",
      "Z": "./audio/20240815_spaccent/ours_LXC/arctic_b0344.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0344.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0344.wav",
      "W": "./audio/20240815_spaccent/baseline_LXC/arctic_b0344.wav",
    }
  },
  {
    "Name": "arctic_b0344",
    "TestID": "BWSSIM---arctic_b0344---BWC",
    "Text": "Lots of men take women buggy riding.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_BWC/arctic_b0344.wav",
      "Z": "./audio/20240815_spaccent/ours_BWC/arctic_b0344.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0344.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0344.wav",
      "W": "./audio/20240815_spaccent/baseline_BWC/arctic_b0344.wav",
    }
  },
  {
    "Name": "arctic_b0038",
    "TestID": "BWSSIM---arctic_b0038---BWC",
    "Text": "In her haste to get away she had forgotten these things.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_BWC/arctic_b0038.wav",
      "Z": "./audio/20240815_spaccent/ours_BWC/arctic_b0038.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0038.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0038.wav",
      "W": "./audio/20240815_spaccent/baseline_BWC/arctic_b0038.wav",
    }
  },
  {
    "Name": "arctic_b0031",
    "TestID": "BWSSIM---arctic_b0031---LXC",
    "Text": "Gregson had seated himself under the lamp and was sharpening a pencil.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_LXC/arctic_b0031.wav",
      "Z": "./audio/20240815_spaccent/ours_LXC/arctic_b0031.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0031.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0031.wav",
      "W": "./audio/20240815_spaccent/baseline_LXC/arctic_b0031.wav",
    }
  },
  {
    "Name": "arctic_b0038",
    "TestID": "BWSSIM---arctic_b0038---NCC",
    "Text": "In her haste to get away she had forgotten these things.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_NCC/arctic_b0038.wav",
      "Z": "./audio/20240815_spaccent/ours_NCC/arctic_b0038.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0038.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0038.wav",
      "W": "./audio/20240815_spaccent/baseline_NCC/arctic_b0038.wav",
    }
  },
  {
    "Name": "arctic_b0038",
    "TestID": "BWSSIM---arctic_b0038---TXHC",
    "Text": "In her haste to get away she had forgotten these things.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_TXHC/arctic_b0038.wav",
      "Z": "./audio/20240815_spaccent/ours_TXHC/arctic_b0038.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0038.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0038.wav",
      "W": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0038.wav",
    }
  },
  {
    "Name": "arctic_b0344",
    "TestID": "BWSSIM---arctic_b0344---TXHC",
    "Text": "Lots of men take women buggy riding.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_TXHC/arctic_b0344.wav",
      "Z": "./audio/20240815_spaccent/ours_TXHC/arctic_b0344.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0344.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0344.wav",
      "W": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0344.wav",
    }
  },
  {
    "Name": "arctic_b0038",
    "TestID": "BWSSIM---arctic_b0038---LXC",
    "Text": "In her haste to get away she had forgotten these things.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_LXC/arctic_b0038.wav",
      "Z": "./audio/20240815_spaccent/ours_LXC/arctic_b0038.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0038.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0038.wav",
      "W": "./audio/20240815_spaccent/baseline_LXC/arctic_b0038.wav",
    }
  },
  {
    "Name": "arctic_b0031",
    "TestID": "BWSSIM---arctic_b0031---TXHC",
    "Text": "Gregson had seated himself under the lamp and was sharpening a pencil.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_TXHC/arctic_b0031.wav",
      "Z": "./audio/20240815_spaccent/ours_TXHC/arctic_b0031.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0031.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0031.wav",
      "W": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0031.wav",
    }
  },
  {
    "Name": "arctic_b0031",
    "TestID": "BWSSIM---arctic_b0031---BWC",
    "Text": "Gregson had seated himself under the lamp and was sharpening a pencil.",
    "LowText": "the 'LEAST' similar'",
    "HighText": "the 'MOST' similar'",
    "Length": 4,
    "Files": {
      "Reference": "./audio/20240815_spaccent/source_BWC/arctic_b0031.wav",
      "Z": "./audio/20240815_spaccent/ours_BWC/arctic_b0031.wav",
      "Y": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0031.wav",
      "X": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0031.wav",
      "W": "./audio/20240815_spaccent/baseline_BWC/arctic_b0031.wav",
    }
  },
]
}