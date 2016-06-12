'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const cms = require('cmsmon');
cms.mongoose = mongoose;
cms.data.categories = [{Type: {Human: null, Animal: null}}, {Type2: {Human: null, Animal: null}}];
const resolvePath = cms.resolvePath = (p) => `backend/${p}`;
cms.data.security = false;
cms.listen(1000);
mongoose.connect('mongodb://localhost/mobile2');

cms.use(require('cmsmon/mobile'));
cms.use(require('./fingerscanner'));

cms.server('backend/en', '/en');