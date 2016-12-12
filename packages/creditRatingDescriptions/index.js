const INVESTMENT_GRADE = 'Investment grade';
const HIGH_YIELD = 'High-yield'

const PRIME = {
  description: 'Prime',
  grade: INVESTMENT_GRADE
}

const HIGH_GRADE = {
  description: 'High grade',
  grade: INVESTMENT_GRADE,
}

const UPPER_MEDIUM_GRADE = {
  description: 'Upper medium grade',
  grade: INVESTMENT_GRADE,
}

const LOWER_MEDIUM_GRADE = {
  description: 'Lower medium grade',
  grade: INVESTMENT_GRADE,
}

const NON_INVESTMENT_GRADE_SPECULATIVE = {
  description: 'Non-investment grade speculative',
  grade: HIGH_YIELD,
}

const HIGHLY_SPECULATIVE = {
  description: 'Highly speculative',
  grade: HIGH_YIELD,
}

const SUBSTANTIAL_RISKS = {
  description: 'Substantial risks',
  grade: HIGH_YIELD,
}

const EXTREMELY_SPECULATIVE = {
  description: 'Extremely speculative',
  grade: HIGH_YIELD
}

const DEFAULT_IMMINENT = {
  description: 'Default imminent',
  grade: HIGH_YIELD,
}

const IN_DEFAULT = {
  description: 'In default',
  grade: HIGH_YIELD
}

const NOT_RATED = {
  description: 'Not rated',
  grade: 'Not rated',
}

module.exports = {
  INVESTMENT_GRADE,
  HIGH_YIELD,
  PRIME,
  HIGH_GRADE,
  UPPER_MEDIUM_GRADE,
  LOWER_MEDIUM_GRADE,
  NON_INVESTMENT_GRADE_SPECULATIVE,
  HIGHLY_SPECULATIVE,
  SUBSTANTIAL_RISKS,
  EXTREMELY_SPECULATIVE,
  DEFAULT_IMMINENT,
  IN_DEFAULT,
  NOT_RATED,
};
