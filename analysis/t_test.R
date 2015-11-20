# read data
data = read.csv("analysis/results/coded.csv")

# get the two groups
with_pictures = data[data$Did.you.see.a.picture.of.a.dog.on.your.vocab.list.during.the.5.minute.study.session. == "Yes",]
without_pictures = data[data$Did.you.see.a.picture.of.a.dog.on.your.vocab.list.during.the.5.minute.study.session. == "No",]

print(t.test(with_pictures$Score,without_pictures$Score))
