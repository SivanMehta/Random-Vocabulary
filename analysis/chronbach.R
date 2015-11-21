library(psy)

# read the data
data = read.csv("analysis/data/coded.csv")

# We don't really care about this variable
drops = c("Did.you.see.a.picture.of.a.dog.on.your.vocab.list.during.the.5.minute.study.session.")

data = data[,!(names(data) %in% drops)]

print(cronbach(data))
