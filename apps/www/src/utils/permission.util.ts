import { UserRole } from "../graphql/generated";

export class PermissionUtils {
	public static getRoleLevel(role: UserRole): number {
		return [UserRole.Member, UserRole.Moderator, UserRole.Admin].indexOf(role);
	}

	public static isGreaterRole(role: UserRole, minValidRole: UserRole): boolean {
		return this.getRoleLevel(role) > this.getRoleLevel(minValidRole);
	}

	public static isValidRole(role: UserRole, minValidRole: UserRole): boolean {
		return this.getRoleLevel(role) >= this.getRoleLevel(minValidRole);
	}
}
