## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|address|string|null: false|
|password|string|null: false|
|user_id|integer|null: false|

### Association
- has_many :comments
- has_many :groups, through: :members

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|group_memver|string|null: false|
|add_memver|string|null: false|
|group_id|integer|null: false|

### Association
- has_many :users, through: :members
_ has_many :comments

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## commnetsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
|time|datetime|null: false|
|comment|text|null: false|

### Association
- belong_to :user
- has_many :group