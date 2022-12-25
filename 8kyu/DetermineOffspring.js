function chromosomeCheck(sperm) {
    return sperm.includes('Y') ?
      "Congratulations! You're going to have a son." : 
      "Congratulations! You're going to have a daughter."
  }
  chromosomeCheck("XX")
