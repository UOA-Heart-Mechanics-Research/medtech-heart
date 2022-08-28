import os
import json

filename = '../ECG/NormalECG.json'
with open(filename, 'r') as f:
	datanormal = json.load(f)
print datanormal[0][u'y']

filename = 'largeInfarctLVP.json'
with open(filename, 'r') as f:
	data = json.load(f)
print data[0][u'y']
	# print data['u"x"']
	# print data[0]
	# print len(data)
t = [];
y = [];
for i in range(0, len(data)):
	t.append(data[i][u'x'])
	y.append(data[i][u'y'])

# Shift trace. 
t_end = 160
y_shifted = y[t_end:]
for i in range(0, t_end):
	y_shifted.append(y[i])
print len(y)
print len(y_shifted)

for i in range(0, len(data)):
	data[i][u'y'] = y_shifted[i]

with open('largeInfarctLVP_shifted.json','w') as f:
	json.dump(data, f, indent=4)

filename = 'DiastolicLVP.json'
with open(filename, 'r') as f:
	data = json.load(f)
print data[0][u'y']
	# print data['u"x"']
	# print data[0]
	# print len(data)
t = [];
y = [];
for i in range(0, len(data)):
	t.append(data[i][u'x'])
	y.append(data[i][u'y'])
print len(data)
# Shift trace. 
t_shift = 10
y_shifted = y[t_shift:]
for i in range(0, t_shift):
	y_shifted.append(y[i])
for i in range(0, len(data)):
	data[i][u'y'] = y_shifted[i]

with open('DiastolicLVP_shifted.json','w') as f:
	json.dump(data, f, indent=4)

filename = 'SystolicLVP.json'
with open(filename, 'r') as f:
	data = json.load(f)
print data[0][u'y']
t = [];
y = [];
for i in range(0, len(data)):
	t.append(data[i][u'x'])
	y.append(data[i][u'y'])
print len(data)
# Shift trace. 
t_end = 160
y_shifted = y[t_end:]
for i in range(0, t_end):
	y_shifted.append(y[i])
for i in range(0, len(data)):
	data[i][u'y'] = y_shifted[i]
with open('SystolicLVP_shifted.json','w') as f:
	json.dump(data, f, indent=4)

filename = '../ECG/MildInfarctECG.json'
with open(filename, 'r') as f:
	data = json.load(f)
print data[0][u'y']
	# print data['u"x"']
	# print data[0]
	# print len(data)
t = [];
y = [];
for i in range(0, len(data)):
	t.append(data[i][u'x'])
	y.append(data[i][u'y'])
print len(data)

# Shift trace. 
y_amp_shifted = y;
shift = y[0] - datanormal[0][u'y'];
for i in range(0, len(data)):
	y_amp_shifted[i] = y[i] - shift;

# Shift trace. 
t_end = 203
y_shifted = y_amp_shifted[t_end:]
for i in range(0, t_end):
	y_shifted.append(y_amp_shifted[i])

for i in range(0, len(data)):
	data[i][u'y'] = y_shifted[i]

with open('../ECG/MildInfarctECG_shifted.json','w') as f:
	json.dump(data, f, indent=4)



filename = '../ECG/LargeInfarctECG.json'
with open(filename, 'r') as f:
	data = json.load(f)
print data[0][u'y']
	# print data['u"x"']
	# print data[0]
	# print len(data)
t = [];
y = [];
for i in range(0, len(data)):
	t.append(data[i][u'x'])
	y.append(data[i][u'y'])
print len(data)


# Shift trace. 
y_amp_shifted = y;
shift = y[0] - datanormal[0][u'y'];
for i in range(0, len(data)):
	y_amp_shifted[i] = y[i] - shift;

# Shift trace. 
t_end = 245
y_shifted = y_amp_shifted[t_end:]
for i in range(0, t_end):
	y_shifted.append(y_amp_shifted[i])
for i in range(0, len(data)):
	data[i][u'y'] = y_shifted[i]

with open('../ECG/LargeInfarctECG_shifted.json','w') as f:
	json.dump(data, f, indent=4)

filename = '../ECG/SystolicECG.json'
with open(filename, 'r') as f:
	data = json.load(f)
print data[0][u'y']
	# print data['u"x"']
	# print data[0]
	# print len(data)
t = [];
y = [];
for i in range(0, len(data)):
	t.append(data[i][u'x'])
	y.append(data[i][u'y'])
print len(data)

# Shift trace. 
t_end = 150
y_shifted = y[t_end:]
for i in range(0, t_end):
	y_shifted.append(y[i])

vertical_shift = y_shifted[0]-datanormal[0][u'y']
for i in range(0, len(data)):
	data[i][u'y'] = y_shifted[i] - vertical_shift

with open('../ECG/SystolicECG_shifted.json','w') as f:
	json.dump(data, f, indent=4)

filename = '../ECG/DiastolicECG.json'
with open(filename, 'r') as f:
	data = json.load(f)
print data[0][u'y']
	# print data['u"x"']
	# print data[0]
	# print len(data)
t = [];
y = [];
for i in range(0, len(data)):
	t.append(data[i][u'x'])
	y.append(data[i][u'y'])
print len(data)

# Shift trace. 
t_shift = 10
y_shifted = y[t_shift:]
for i in range(0, t_shift):
	y_shifted.append(y[i])

vertical_shift = y_shifted[0] - datanormal[0][u'y']
for i in range(0, len(data)):
	data[i][u'y'] = y_shifted[i] - vertical_shift

with open('../ECG/DiastolicECG_shifted.json','w') as f:
	json.dump(data, f, indent=4)

# filename = '../ECG/ArrhythmiaECG.json'
# with open(filename, 'r') as f:
# 	data = json.load(f)
# print data[0][u'y']
# 	# print data['u"x"']
# 	# print data[0]
# 	# print len(data)
# t = [];
# y = [];
# for i in range(0, len(data)):
# 	t.append(data[i][u'x'])
# 	y.append(data[i][u'y'])

# for i in range(0, len(data)):
# 	data[i][u'y'] = y[i]*100;

# with open('../ECG/ArrhythmiaECG_scaled.json','w') as f:
# 	json.dump(data, f, indent=4)